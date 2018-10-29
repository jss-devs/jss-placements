<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        if (Auth::guest()) {
            return response()->json([
                'status' => false,
                'error' => trans('auth.guest'),
            ], 403);
        }

        $roles = is_array($role)
            ? $role
            : explode('|', $role);

        if (! Auth::user()->hasAnyRole($roles)) {
            return response()->json([
                'status' => false,
                'error' => trans('User does not have the right roles.'),
            ], 403);
        }

        return $next($request);
    }
}
