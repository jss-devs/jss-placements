<?php

namespace App\Http\Middleware;

use Closure;

class ApiKeyMiddleware
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
        $api_key = $request->header('key');
        // if ($api_key != env('API_KEY')) {
        //     return response()->json([
        //         'error'=>'invalid_key',
        //         'message'=>'Invalid Key'
        //     ], 403);
        // }
        return $next($request);
    }
}
