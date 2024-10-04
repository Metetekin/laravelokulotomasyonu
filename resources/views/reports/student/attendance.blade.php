<x-print.layout type="full-page">

    <h2 class="heading">{{ trans('global.report', ['attribute' => trans('student.attendance.attendance')]) }}</h2>

    <table width="100%">
        <tr>
            <td>Total Days: {{ $totalDays }}</td>
            <td class="text-center">Holidays: {{ $holidayCount }}</td>
            <td class="text-right">Working Days: {{ $workingDays }}</td>
        </tr>
    </table>

    <table border="1" class="border-dark mt-2 table" width="100%" border="0" cellspacing="4" cellpadding="0">
        <thead>
            <th>{{ trans('academic.batch.batch') }}</th>
            <th>{{ trans('academic.batch_incharge.batch_incharge') }}</th>
            <th>{{ trans('global.count', ['attribute' => trans('student.attendance.attendance')]) }}</th>
        </thead>
        @foreach ($data as $item)
            <tr>
                <td>{{ Arr::get($item, 'batch') }}</td>
                <td>{{ Arr::get($item, 'incharge') }}</td>
                <td>{{ Arr::get($item, 'count', 0) }}</td>
            </tr>
        @endforeach
    </table>
</x-print.layout>
