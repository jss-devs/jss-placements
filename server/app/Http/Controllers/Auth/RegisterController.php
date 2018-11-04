<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Models\Management;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:managements',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\Models\Management
     */
    protected function create(array $data)
    {
        return Management::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *   path="/auth/signup",
     *   summary="Management Signup",
     *   tags={"Login/Signup"},
     *   description="",
     *   operationId="register",
     *   consumes={"multipart/form-data"},
     *   produces={"application/json"},
     * @SWG\Parameter(
     *       name="Key",
     *       in="header",
     *       description="API Key",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="name",
     *       in="formData",
     *       description="User's name",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
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
     * @SWG\Parameter(
     *       name="password_confirmation",
     *       in="formData",
     *       description="Confirm password",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Response(response="200", description="{'status':true,'data':{'name':'name',email':'email_id','mobile':'mobile','role':'[management,student]'}}"),
     * @SWG\Response(response="401", description="{'status':false,'error':{'error_message'}}"),
     * @SWG\Response(response="429", description="{'status':false,'error':{'throttle_error_message'}}"),
     * )
     */
    public function register(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 401);
        }

        event(new Registered($user = $this->create($request->all())));
        $user->assignRole('management');

        $this->guard()->login($user);

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
}
