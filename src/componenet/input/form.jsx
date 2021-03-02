import React, { Component } from 'react';

class Form extends Component {
    state= {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckbox = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    handleSkillsChange = event => {
        if(event.target.checked) {
            this.setState( {
                skills: [...this.state.skills, event.target.value]
            })
        }else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState(skills)
        }
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        const {name, country,bio, birthDay, gender, agree, skills} = this.state 
        return (
            <div>
                <h1>Form</h1>
                <input onChange={this.handleChange} value={name} type="text" name='name' placeholder='enter your name' /><br></br><br></br>

                <select onChange={this.handleChange} value={country} name='country'>
                    <option>selecrt country</option>
                    <option value='Bangladesh'>Bangladesh</option>
                    <option value='India'>India</option>
                    <option value='srilanka'>srilanka</option>
                    <option value='Pakistan'>Pakistan</option>
                </select><br></br><br></br>

                <textarea onChange={this.handleChange} value={bio} name='bio' placeholder='write something about you...'></textarea><br></br><br></br>
                <input onChange={this.handleChange} value={birthDay} type="date" name='birthDay'/>
                <div>
                    <input onChange={this.handleChange} type="radio" name='gender' value='male'/>male
                    <input onChange={this.handleChange} type="radio" name='gender' value='female'/>female
                    <input onChange={this.handleChange} type="radio" name='gender' value='others'/>other
                </div>

                <div>
                    skills 
                    <br></br>
                    <input onChange={this.handleSkillsChange}  type='checkbox' name='skills' value='java' checked= {skills.includes('java')} />java
                    <input onChange={this.handleSkillsChange} type='checkbox' name='skills' value='javascript' checked= {skills.includes('javascript')} />javascript
                    <input onChange={this.handleSkillsChange} type='checkbox' name='skills' value='python' checked= {skills.includes('python')} />python
                </div>

                <input type="checkbox" name="agree" onChange={this.handleCheckbox} checked={agree} />i agree with  all terms and condition<br></br>
                <button onClick={this.handleSubmit}>submit</button>
               
            </div>
        );
    }
}

export default Form;