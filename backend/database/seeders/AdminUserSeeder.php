<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            "name"=>"admin",
            "email"=>"jomobrain1@gmail.com",
            "email_verified_at"=>now(),
            "password"=>bcrypt("12345678"),
            "is_admin"=>true
        ]);
    }
}