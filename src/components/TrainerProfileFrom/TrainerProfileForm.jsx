import React, { Component } from 'react'
import MultipleDatePicker from 'react-multiple-datepicker'
// import Counter from './Counter'

class TrainerProfileForm extends Component {
  state = {
    name: '',
    gym: '',
    gender: '',
    career:'',
    dates: [],
    bodypart: '',
    count: '',
    set:''
  }
  ProfileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dateChange = dates => {
    //console.log(dates);
    this.setState({ dates: [...dates] });
    // console.log(this.state)
  }



  profileSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      gym: '',
      gender: '',
      career:'',
      dates: [],
      bodypart: '',
      count:'',
      set:''
    })
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.profileSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.ProfileChange}
          name="name" required="required"
        />
        <input
          placeholder="헬스장이름 지점"
          value={this.state.gym}
          onChange={this.ProfileChange}
          name="gym" required="required"
        />
        <select name="gender" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">성별</option>
            <option value="여성">여성</option>
            <option value="남성">남성</option>
        </select>
        <select name="career" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">지도경력</option>
            <option value="~1년">1년미만</option>
            <option value="1년~2년">1년~2년</option>
            <option value="2년~3년">2년~3년</option>
            <option value="3년~4년">3년~4년</option>
            <option value="4년~5년">4년~5년</option>
            <option value="5년이상">5년~</option>
        </select>
        <MultipleDatePicker key="" onSubmit={this.dateChange} minDate={new Date()} />
        <div className="body" value={this.state.value} onChange={this.ProfileChange} required="required">주요운동부위
        <input type="radio" name="bodypart" value="등" />등
        <input type="radio" name="bodypart" value="복부"/>복부
        <input type="radio" name="bodypart" value="목"/>목
        <input type="radio" name="bodypart" value="팔"/>팔
        <input type="radio" name="bodypart" value="엉덩이"/>엉덩이
        <input type="radio" name="bodypart" value="허벅지"/>허벅지
        <input type="radio" name="bodypart" value="종아리"/>종아리
        </div>
        <select name="count" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">횟수</option>
            <option value="6">6회</option>
            <option value="8">8회</option>
            <option value="10">10회</option>
            <option value="12">12회</option>
            <option value="14">14회</option>
        </select>
        <select name="set" required="required" value={this.state.value} onChange={this.ProfileChange}>
            <option value="">반복set</option>
            <option value="1set">1set</option>
            <option value="2set">2set</option>
            <option value="3set">3set</option>
            <option value="4set">4set</option>
        </select>
        <input type="text"/>
        <Counter/>
        <button type="submit">등록</button>
      </form>
    );
  }
}


export default TrainerProfileForm;

