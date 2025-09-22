import React from 'react'
import Component from './components/1.comp/Component'
import ProfileCard from './components/2.props/ProfileCard'
import ConditionalRender from './components/3.conditonalRender/ConditionalRender'
import List from './components/4.list/List'
import Style from './components/5.style/Style'
import State from './components/6.state/State'
import MultipleState from './components/7.multipleState/MultipleState'
import ArrayState from './components/8.arrayState/ArrayState'
import TaskHobbie from './components/9.taskForArray&Obj/TaskHobbie'
import Score from './components/10.scoreTask/Score'
import Test from './components/11.test/Test'
import UseEffect from './components/12.useEffect/UseEffect'
import Form from './components/13.form/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import OldBook from './components/14.nestedRoute/OldBook'
import NewBook from './components/14.nestedRoute/NewBook'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        
        <Route path='/component' element={<Component/>}/>
        <Route path='/profile_card' element={<ProfileCard/>}/>
        <Route path='/conditional_rendering' element={<ConditionalRender/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/style' element={<Style/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/multipl_State' element={<MultipleState/>}/>
        <Route path='/array' element={<ArrayState/>}/>
        <Route path='/task' element={<TaskHobbie/>}/>
        <Route path='/score' element={<Score/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/books'>
        <Route path='oldbooks' element={<OldBook/>}/>
        <Route path='newbooks' element={<NewBook/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
       </div>
  )
}

export default App
