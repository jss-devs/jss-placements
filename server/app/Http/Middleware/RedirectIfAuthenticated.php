<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @param  string|null              $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard()->check() or Auth::guard('students')->check()) {
            return response()->json([
                'status' => false,
                'error' => trans('auth.logged_in'),
            ], 403);
        }

        return $next($request);
    }
}
