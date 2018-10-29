<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::all();

        return response()->json([
            'status' => true,
            'data' => $students,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *   path="/management/students",
     *   summary="Student Add",
     *   tags={"Students"},
     *   description="",
     *   operationId="store",
     *   consumes={"multipart/form-data"},
     *   produces={"application/json"},
     * @SWG\Parameter(
     *       name="Key",
     *       in="header",
     *       description="API Key",
     *       required=true,
     *       type="string",
     *       @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="first_name",
     *       in="formData",
     *       description="Student's first name",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="last_name",
     *       in="formData",
     *       description="Student's last name",
     *       required=false,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="email",
     *       in="formData",
     *       description="Student's email",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="mobile",
     *       in="formData",
     *       description="Student's Mobile number",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="roll_no",
     *       in="formData",
     *       description="Student's University Roll number",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="dob",
     *       in="formData",
     *       description="Student's DOB",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="gender",
     *       in="formData",
     *       description="Student's Gender",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="father_name",
     *       in="formData",
     *       description="Student's father name",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="address",
     *       in="formData",
     *       description="Student's Address",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="city",
     *       in="formData",
     *       description="Student's City",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="state",
     *       in="formData",
     *       description="Student's State",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="country",
     *       in="formData",
     *       description="Student's Country",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="pincode",
     *       in="formData",
     *       description="Student's Pincode",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="tenth_per",
     *       in="formData",
     *       description="Student's 10th percentage",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="twelth_per",
     *       in="formData",
     *       description="Student's 12th percentage",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="ug_per",
     *       in="formData",
     *       description="Student's UG percentage",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="pg_per",
     *       in="formData",
     *       description="Student's PG percentage",
     *       required=false,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="branch",
     *       in="formData",
     *       description="Student's Branch",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="course",
     *       in="formData",
     *       description="Student's Course",
     *       required=true,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Parameter(
     *       name="password",
     *       in="formData",
     *       description="User's password",
     *       required=false,
     *       type="string",
     * @SWG\Items(type="string")
     *   ),
     * @SWG\Response(response="200", description="{'status':true,'data':{'name':'name',email':'email_id','mobile':'mobile','role':'[management,student]'}}"),
     * @SWG\Response(response="401", description="{'status':false,'error':{'error_message'}}"),
     * @SWG\Response(response="429", description="{'status':false,'error':{'throttle_error_message'}}"),
     * )
     */
    public function store(Request $request)
    {
        $student = $request->all();
        $validator = Student::validator($student);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 401);
        }
        if (!$student['password']) {
            $student['password'] = $student['dob'];
        }
        $student['password'] = bcrypt($student['password']);

        $student = Student::create($student);
        $student->assignRole('student');

        return response()->json([
            'status' => true,
            'message' => trans('student.created'),
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response()->json([
                'status' => false,
                'error' => trans('student.not_found'),
            ], 404);
        }
        return response()->json([
            'status' => true,
            'data' => $student,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
