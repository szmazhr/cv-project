import React from 'react';
import photoPlaceHolder from '../../assets/user-placeholder.png';
import InputField from './InputField';
import TextArea from './TextArea';

function PersonalInfoForm({ personalInfo, setState }) {
  const label = (
    <img
      src={personalInfo.photo || photoPlaceHolder}
      alt="Profile"
      width={300}
      height={400}
    />
  );

  const updateValue = (prop, value) => {
    // if (prop === 'email') {
    //   console.log(value);
    //   if (value.match(/\s/g)) return;
    // }
    setState('personal', prop, value);
  };

  const updatePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (_e) => {
        updateValue('photo', _e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateAndSavePhone = (id, value) => {
    let phone = value.replace(/\D/g, '');
    if (phone.length > 15) return;
    if (+phone !== 0) {
      phone *= 1;
    }
    if (phone) {
      updateValue(id, `+${phone}`);
    } else {
      updateValue(id, phone);
    }
  };

  return (
    <section className="personal-info">
      <div className="section-header">
        <h1>Personal Information</h1>
      </div>
      <div className="file-upload">
        <input type="file" accept="image/*" onChange={updatePhoto} id="photo" />
        <label htmlFor="photo">{label}</label>
      </div>
      <InputField
        id="name"
        label="Name"
        value={personalInfo.name}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder="What is Your Name?"
        type="text"
      />
      <InputField
        id="title"
        label="Title"
        value={personalInfo.title}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder="What is Your Title?"
        type="text"
      />
      <TextArea
        id="bio"
        label="Bio"
        value={personalInfo.bio}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder="Tell us about yourself"
      />
      <div className="input-group">
        <InputField
          id="phone"
          label="Phone"
          value={personalInfo.phone}
          onChange={(e) => validateAndSavePhone(e.target.id, e.target.value)}
          placeholder="What is Your Phone Number?"
          type="text"
        />
        <InputField
          id="email"
          label="Email"
          value={personalInfo.email}
          onChange={(e) =>
            updateValue(e.target.id, e.target.value.replace(/\s/g, ''))
          }
          placeholder="What is Your Email?"
          type="text"
        />
      </div>
      <InputField
        id="address"
        label="Address"
        value={personalInfo.address}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder="What is Your Address?"
        type="text"
      />
      <div className="input-group">
        <InputField
          id="city"
          label="City"
          value={personalInfo.city}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="What is Your City?"
          type="text"
        />
        <InputField
          id="region"
          label="Region"
          value={personalInfo.region}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="What is Your Region?"
          type="text"
        />
        <InputField
          id="zipPin"
          label="Zip/Pin"
          value={personalInfo.zipPin}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="What is Your Zip/Pin?"
          type="text"
        />
        <InputField
          id="country"
          label="Country"
          value={personalInfo.country}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="What is Your Country?"
          type="text"
        />
      </div>
    </section>
  );
}

export default PersonalInfoForm;
