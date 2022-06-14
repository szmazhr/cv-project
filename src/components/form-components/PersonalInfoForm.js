import React, { Component } from 'react';
import photo from '../../assets/shahzar.jpg';
import InputField from './InputField';
import TextArea from './TextArea';

export default class PersonalInfoForm extends Component {
  validatePhone = (id, value) => {
    let phone = value.replace(/\D/g, '');
    if (phone.length > 15) return;
    if (+phone !== 0) {
      phone *= 1;
    }
    if (phone) {
      this.updateValue(id, `+${phone}`);
    } else {
      this.updateValue(id, phone);
    }
  };

  updateValue = (prop, value) => {
    const { setState } = this.props;
    setState('personal', prop, value);
  };

  render() {
    const { state } = this.props;
    const {
      name,
      bio,
      title,
      phone,
      email,
      address,
      city,
      region,
      zipPin,
      country,
    } = state;
    return (
      <section className="personal-info">
        <div className="section-header">
          <h1>Personal Information</h1>
        </div>
        <img src={photo} alt="Profile" width={300} height={400} />
        <InputField
          id="name"
          label="Name"
          value={name}
          updateValue={this.updateValue}
          placeholder="What is Your Name?"
          type="text"
        />
        <InputField
          id="title"
          label="Title"
          value={title}
          updateValue={this.updateValue}
          placeholder="What is Your Title?"
          type="text"
        />
        <TextArea
          id="bio"
          label="Bio"
          value={bio}
          updateValue={this.updateValue}
          placeholder="Tell us about yourself"
        />
        <div className="input-group">
          <InputField
            id="phone"
            label="Phone"
            value={phone}
            updateValue={this.validatePhone}
            placeholder="What is Your Phone Number?"
            type="text"
          />
          <InputField
            id="email"
            label="Email"
            value={email}
            updateValue={this.updateValue}
            placeholder="What is Your Email?"
            type="email"
          />
        </div>
        <InputField
          id="address"
          label="Address"
          value={address}
          updateValue={this.updateValue}
          placeholder="What is Your Address?"
          type="text"
        />
        <div className="input-group">
          <InputField
            id="city"
            label="City"
            value={city}
            updateValue={this.updateValue}
            placeholder="What is Your City?"
            type="text"
          />
          <InputField
            id="region"
            label="Region"
            value={region}
            updateValue={this.updateValue}
            placeholder="What is Your Region?"
            type="text"
          />
          <InputField
            id="zipPin"
            label="Zip/Pin"
            value={zipPin}
            updateValue={this.updateValue}
            placeholder="What is Your Zip/Pin?"
            type="text"
          />
          <InputField
            id="country"
            label="Country"
            value={country}
            updateValue={this.updateValue}
            placeholder="What is Your Country?"
            type="text"
          />
        </div>
      </section>
    );
  }
}
