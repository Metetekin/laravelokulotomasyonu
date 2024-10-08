<?php

namespace App\Actions\Employee;

use App\Contracts\PaginationHelper;
use App\Helpers\CalHelper;
use App\Models\Employee\Employee;
use App\Models\Employee\Payroll\Payroll;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class FetchEmployee extends PaginationHelper
{
    public function execute(Request $request, bool $array = false): LengthAwarePaginator|array
    {
        $this->checkDate($request);

        $excludedEmployeeIds = [];

        if ($request->boolean('hide_employee_with_payroll')) {
            $excludedEmployeeIds = Payroll::query()
                ->where('start_date', '<=', $request->date)
                ->where('end_date', '>=', $request->date)
                ->pluck('employee_id')
                ->all();
        }

        $employees = Employee::query()
            ->detail()
            ->filterAccessible()
            ->whereNotIn('employees.id', $excludedEmployeeIds)
            ->when(! $request->month_wise, function ($q) use ($request) {
                $q->where(function ($q) use ($request) {
                    $q->whereNull('leaving_date')->orWhere('leaving_date', '>=', $request->date);
                });
            })
            ->when($request->month_wise, function ($q) use ($request) {
                $q->where(function ($q) use ($request) {
                    $q->whereNull('leaving_date')->orWhere(function ($q) use ($request) {
                        $q->whereNotNull('leaving_date')->where(function ($q) use ($request) {
                            $q->whereBetween('leaving_date', [$request->start_date, $request->end_date]);
                        });
                    });
                });
            })
            ->filter([
                'App\QueryFilters\ExactMatch:code_number',
                'App\QueryFilters\WhereInMatch:departments.uuid,department',
                'App\QueryFilters\WhereInMatch:designations.uuid,designation',
                'App\QueryFilters\WhereInMatch:branches.uuid,branch',
                'App\QueryFilters\WhereInMatch:options.uuid,employment_status',
            ])
            ->orderBy('name', 'asc')
            ->paginate($this->getPageLength(), ['*'], 'current_page');

        return $array ? $employees->toArray() : $employees;
    }

    private function checkDate(Request $request)
    {
        if (! $request->month_wise) {
            $date = $request->date ?? today()->toDateString();
            $date = CalHelper::validateDateFormat($date) ? $date : today()->toDateString();
            $request->merge(['date' => $date]);

            return;
        }

        $date = $request->date ?? today()->format('Y-m');
        $yearMonth = CalHelper::validateDateFormat($date, 'Y-m') ? $date : today()->format('Y-m');
        $date = $yearMonth.'-01';
        $request->merge([
            'start_date' => $date,
            'end_date' => Carbon::parse($date)->endOfMonth()->toDateString(),
            'month' => $yearMonth,
        ]);
    }
}
