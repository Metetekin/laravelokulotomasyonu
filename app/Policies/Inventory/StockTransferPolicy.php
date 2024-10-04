<?php

namespace App\Policies\Inventory;

use App\Models\Inventory\StockTransfer;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StockTransferPolicy
{
    use HandlesAuthorization;

    private function validateTeam(User $user, StockTransfer $stockTransfer)
    {
        return $stockTransfer->inventory->team_id == $user->current_team_id;
    }

    /**
     * Determine whether the user can view any models.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->can('stock-transfer:read');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, StockTransfer $stockTransfer)
    {
        if (! $this->validateTeam($user, $stockTransfer)) {
            return false;
        }

        return $user->can('stock-transfer:read');
    }

    /**
     * Determine whether the user can create models.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return $user->can('stock-transfer:create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, StockTransfer $stockTransfer)
    {
        if (! $this->validateTeam($user, $stockTransfer)) {
            return false;
        }

        return $user->can('stock-transfer:edit');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, StockTransfer $stockTransfer)
    {
        if (! $this->validateTeam($user, $stockTransfer)) {
            return false;
        }

        return $user->can('stock-transfer:delete');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, StockTransfer $stockTransfer)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, StockTransfer $stockTransfer)
    {
        //
    }
}
