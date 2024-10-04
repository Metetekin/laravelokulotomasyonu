<?php

namespace App\Policies\Transport\Vehicle;

use App\Models\Transport\Vehicle\FuelRecord;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FuelRecordPolicy
{
    use HandlesAuthorization;

    private function validateTeam(User $user, FuelRecord $vehicleFuelRecord)
    {
        return $vehicleFuelRecord->vehicle->team_id == $user->current_team_id;
    }

    /**
     * Determine whether the user can request for pre-requisites.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function preRequisite(User $user)
    {
        return $user->canAny(['vehicle:create', 'vehicle:edit']);
    }

    /**
     * Determine whether the user can view any models.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->can('vehicle:read');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, FuelRecord $vehicleFuelRecord)
    {
        if (! $this->validateTeam($user, $vehicleFuelRecord)) {
            return false;
        }

        return $user->can('vehicle:read');
    }

    /**
     * Determine whether the user can create models.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('vehicle:create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, FuelRecord $vehicleFuelRecord)
    {
        if (! $this->validateTeam($user, $vehicleFuelRecord)) {
            return false;
        }

        return $user->can('vehicle:edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, FuelRecord $vehicleFuelRecord)
    {
        if (! $this->validateTeam($user, $vehicleFuelRecord)) {
            return false;
        }

        return $user->can('vehicle:delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, FuelRecord $vehicleFuelRecord)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, FuelRecord $vehicleFuelRecord)
    {
        //
    }
}
