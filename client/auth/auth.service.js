'use strict';

angular.module("bodegasPalmarApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login:login,
		logout:logout,
		isAdmin:isAdmin,
		isEmpleado:isEmpleado,


		isAuthenticated:isAuthenticated
	}

//inicio de sesion
	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);
			console.log(Auth.isAdmin());
			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login");
			$state.go('login');
		})
	}
//serrar Seccion
	function logout(){
		if($auth.isAuthenticated()){
			$auth.logout()
			.then(respose=>{
				console.log("cerro sesion");
				$state.go('main');
			})
			.catch(err =>{

				$state.go('main');
			})
		}

	}

	//ADMIN
	function isAdmin(){
		if(Auth.isAuthenticated()){
				console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}
//Abogados
	function isEmpleado(){
		if(Auth.isAuthenticated()){
				console.log("ROLES",$auth.getPayload().roles);
				if($auth.getPayload().roles.indexOf("EMPLEADO") !== -1){
					return true;
				}else{
					return false;
				}
		}else{
			return false;
		}

	}

//usuario Autenticado

	function isAuthenticated(){
		if($auth.isAuthenticated()){
			return true;
		}else{
			return false;
		}
	}

	return Auth;

}
