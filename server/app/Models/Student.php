<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Validator;

class Student extends Authenticatable
{
    use Notifiable, HasRoles;

    protected $guard_name = 'students';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password', 'mobile',
        'roll_no', 'dob', 'gender', 'father_name', 'address', 'city', 'state',
        'country', 'pincode', 'tenth_per', 'twelth_per', 'ug_per', 'pg_per',
        'branch', 'course',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function validator($input)
    {
        $validator = Validator::make($input, [
            'first_name' => 'required|string',
            'last_name' => 'string',
            'email' => 'required|string|email|max:255|unique:students',
            'mobile' => 'required|regex:/[7-9]{1}[0-9]{9}/',
            'roll_no' => 'required|string|unique:students',
            'dob' => 'required|string',
            'gender' => 'required|string',
            'father_name' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'country' => 'required|string',
            'pincode' => 'required|string',
            'tenth_per' => 'required|string',
            'twelth_per' => 'required|string',
            'ug_per' => 'required|string',
            'branch' => 'required|string',
            'course' => 'required|string',
        ]);
        return $validator;
    }
}
