import React from 'react';
import generator from 'generate-password';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import Button from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

const styles = {
  block: {
    marginTop: 32,
    marginBottom: 32,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			password: "",
			options: {
        length: 10,
        numbers: true,
        uppercase: true,
        symbols: true,
        excludeSimilarCharacters: true,
        strict: true,
			}
		}
  }
  
  componentDidMount(){
    this.generatePass()
  }

  handleFieldChange = (_, value) => {
    this.setState((state) => ({
      options: {
        ...state.options,
        length: value
      }
    }))
  }

  handleCheckbox = (e, value) => {
    const { currentTarget } = e
    console.log(currentTarget.name || '', value)
    this.setState((state) => ({
      options: {
        ...state.options,
        [currentTarget.name || '']: value,
      }
    }))
  }

	generatePass = () => {
    const opts = {
      lowercase: true,
      uppercase: false,
			...this.state.options,
    }
    
		const password = generator.generate(opts);
    console.log(password)
    this.setState({
      password,
    })
	}

	render() {
		return (
			<div>
				<Card>
					<CardText style={{fontSize: '1em'}}>          
						<Slider
							defaultValue={10}
							description={`Password length (${this.state.options.length})`}
							max={20}
							min={8}
							name='passwordLength'
							onChange={this.handleFieldChange}
							required={true}
							step={1}
							value={10}
					
						/>

            <div style={styles.block}>
              <Checkbox
                checked={this.state.options.numbers}
                name="numbers"
                label="Numbers"
                onCheck={this.handleCheckbox}
                style={styles.checkbox}
              />
              <Checkbox
                checked={this.state.options.uppercase}
                name="uppercase"
                label="UpperCase"
                onCheck={this.handleCheckbox}
                style={styles.checkbox}
              />
              <Checkbox
                checked={this.state.options.symbols}
                name="symbols"
                label="Symbols"
                onCheck={this.handleCheckbox}
                style={styles.checkbox}
              />
              <Checkbox
                checked={this.state.options.excludeSimilarCharacters}
                name="excludeSimilarCharacters"
                label="ExcludeSimilarCharacters (exclude similar chars, like 'i' and 'l'.)"
                onCheck={this.handleCheckbox}
                style={styles.checkbox}
              />
              <Checkbox
                checked={this.state.options.strict}
                name="strict"
                label="Strict (Include one of each from above characters)"
                onCheck={this.handleCheckbox}
                style={styles.checkbox}
              />
            </div>
						<Button primary onClick={this.generatePass} label="Generate" />
            <br />
            <br />
            <br />
            <Divider/>
            <h4>Generated Password</h4>
            <TextField
              onClick={() => {
                const input = document.getElementById("generated-password");
                input.focus();
                input.select();
              }}
              fullWidth={true}
              id="generated-password"
              value={this.state.password}
            />
            <br />
					</CardText>
				</Card>
			</div>
		);
	}
}

export default Main;
