<?php

namespace App\Http\Controllers;

class ComercController extends Controller
{
    public function index()
    {
        $projeto = "Projeto Experimental Comerc Energia";
    	return view('index')->with("projeto",$projeto);    
    }
}
