<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::firstOrCreate(['name' => 'management']);
        $permission = Permission::firstOrCreate(['name' => 'add_companies']);

        $role->givePermissionTo($permission);

        $role = Role::firstOrCreate(['guard_name' => 'students', 'name' => 'student']);
    }
}
