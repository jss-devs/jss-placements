<?php

namespace App\Http\Middleware;

use Closure;

class ApiDocMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->key == env('API_DOC_KEY')) {
            return $next($request);
        }
        return response('Unauthorized.', 401);
    }
}
