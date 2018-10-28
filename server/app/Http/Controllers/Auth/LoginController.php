<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Validator;
use Lang;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * @SWG\Info(title="Placements - API", version="1.0")
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @SWG\Post(
     *   path="/auth/login",
     *   summary="Management/User Login",
     *   tags={"Login/Signup"},
     *   description="",
     *   operationId="login",
     *   consumes={"multipart/form-data"},
     *   produces={"application/json"},
     * @SWG\Parameter(
     *       name="email",
     *       in="formData",
     *       description="User's email",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="password",
     *       in="formData",
     *       description="User's password",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Response(response="200", description="{'status':true,'data':{'name':'name',email':'email_id','mobile':'mobile','role':'[management,student]'}}"),
     * @SWG\Response(response="401", description="{'status':false,'error':{'error_message'}}"),
     * @SWG\Response(response="429", description="{'status':false,'error':{'throttle_error_message'}}"),
     * )
     */
    public function login(Request $request)
    {
        $validator = $this->validateLogin($request);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 401);
        }

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        } elseif ($this->attemptStudentLogin($request)) {
            return $this->sendStudentLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return response()->json([
            'status' => false,
            'error' => trans('auth.failed')
        ], 401);

    }

    /**
     * Validate the user login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    protected function validateLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
        return $validator;
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        $user = Auth::user();

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'mobile' => $user->mobile,
            'role' => $user->getRoleNames(),
        ];

        return response()->json([
            'status' => true,
            "data" => $data,
        ], 200);
    }

    /**
     * Redirect the user after determining they are locked out.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    protected function sendLockoutResponse(Request $request)
    {
        $seconds = $this->limiter()->availableIn(
            $this->throttleKey($request)
        );

        return response()->json([
            'status' => false,
            'error' => trans('auth.throttle', ['seconds' => $seconds]),
        ], 429);
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function attemptStudentLogin(Request $request)
    {
        return Auth::guard('students')->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    protected function sendStudentLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        $user = Auth::guard('students')->user();

        $data = [
            'name' => ucfirst($user->first_name . ' ' . $user->last_name),
            'email' => $user->email,
            'mobile' => $user->mobile,
            'role' => $user->getRoleNames(),
        ];

        return response()->json([
            'status' => true,
            "data" => $data,
        ], 200);
    }


    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *   path="/logout",
     *   summary="Management/User Logout",
     *   tags={"Login/Signup"},
     *   description="",
     *   operationId="logout",
     *   consumes={"multipart/form-data"},
     *   produces={"application/json"},
     * @SWG\Response(response="200", description="{'status':true,'message':{'auth.logout'}}"),
     * )
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        return response()->json([
            'status' => true,
            'message' => trans('auth.logout'),
        ], 200);
    }
}
