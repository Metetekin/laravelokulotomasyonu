<?php

namespace App\Http\Resources\Academic;

use App\Enums\Academic\CertificateFor;
use App\Enums\Academic\CertificateType;
use Illuminate\Http\Resources\Json\JsonResource;

class CertificateTemplateSummaryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'uuid' => $this->uuid,
            'name' => $this->name,
            'for' => CertificateFor::getDetail($this->for),
            'type' => CertificateType::getDetail($this->type),
            'created_at' => \Cal::dateTime($this->created_at),
            'updated_at' => \Cal::dateTime($this->updated_at),
        ];
    }
}
