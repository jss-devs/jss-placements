<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'apikey'], function () {
    // Authentication Routes...
    Route::post('auth/login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout')->name('logout');

    Route::post('auth/signup', 'Auth\RegisterController@register');

    // Password Reset Routes...
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');


    Route::get('/home', 'HomeController@index')->name('home');

    // Management
    Route::group(['middleware' => ['auth:students,managements', 'role:management']], function () {

        Route::get('/management/jobs', 'JobController@index')->name('jobs');

        Route::resource('/management/students', 'StudentController');

    });

});

