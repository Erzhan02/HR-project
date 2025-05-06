import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage/ui/HomePage';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			{/* <Route path='/vacancies' element={<Vacancies />} />
			<Route path='/frequentlyAskedQuestions' element={<FAQ />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/signIn' element={<SignIn />} />
			<Route path='/signUp' element={<SignUp />} />
			<Route path='/confirmationCode' element={<ConfirmationPage />} />
			<Route path='/passwordReset' element={<ResetPasswordPage />} /> */}
		</Routes>
	);
};

export default App;
