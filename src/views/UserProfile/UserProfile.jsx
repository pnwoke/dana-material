import React from "react";
import moment from "moment";
import { connect } from 'react-redux'; 
import { Grid, InputLabel } from "material-ui";
import { startAddAccount } from "../../actions/accounts"

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

// import avatar from "assets/img/faces/marc.jpg";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: props.account ? props.account.fullName : '',
      company: props.account ? props.account.company : '',
      address: props.account ? props.account.address : '',
      phone: props.account ? props.account.phone : '',
      carryObject: props.account ? props.account.carryObject : '',
      vehichle: props.account ? props.account.vehichle : '',
      driver: props.account ? props.account.driver : '',
      cardNo: props.account ? props.account.cardNo : '',
      imageUrl: props.account ? props.account.imageUrl : '',
      contact: props.account ? props.account.contact : '',
      contactDept: props.account ? props.account.contactDept : '',
      purpose: props.account ? props.account.purpose : '',
      error: ''
    };
  }
  onFullNameChange = (e) => {
    const fullName = e.target.value;
    this.setState(() => ({
      fullName
    }));
  };
  onContactChange = (e) => {
    const contact = e.target.value;
    this.setState(() => ({
      contact
    }));
  };
  onContactDeptChange = (e) => {
    const contactDept = e.target.value;
    this.setState(() => ({
      contactDept
    }));
  };
  onPurposeChange = (e) => {
    const purpose = e.target.value;
    this.setState(() => ({
      purpose
    }));
  };
  onCompanyChange = (e) => {
    const company = e.target.value;
    this.setState(() => ({
      company
    }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({
      address
    }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({
      phone
    }));
  };
  onCarryObjectChange = (e) => {
    const carryObject = e.target.value;
    this.setState(() => ({
      carryObject
    }));
  };
  onVehichleChange = (e) => {
    const vehichle = e.target.value;
    this.setState(() => ({
      vehichle
    }));
  };
  onDriverChange = (e) => {
    const driver = e.target.value;
    this.setState(() => ({
      driver
    }));
  };
  onCardNoChange = (e) => {
    const cardNo = e.target.value;
    this.setState(() => ({
      cardNo
    }));
  };
  onFocusChange = ({
    focused
  }) => {
    this.setState(() => ({
      calenderFocused: focused
    }));
  };
  setRef = (webcam) => {
    this.webcam = webcam;
  };
  webcamButton = (e) => {
    e.preventDefault();

    if (!!this.state.imageUrl) {
      this.setState(() => ({
        imageUrl: ''
      }));
    } else {
      const imageUrl = this.webcam.getScreenshot();;
      this.setState(() => ({
        imageUrl
      }));
    }
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.fullName ||
      !this.state.address ||
      !this.state.phone ||
      !this.state.cardNo ||
      !this.state.contact ||
      !this.state.contactDept ||
      !this.state.purpose
    ) {
      this.setState(() => ({
        error: 'Please provide all useful information!'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        fullName: this.state.fullName,
        company: this.state.company,
        address: this.state.address,
        phone: this.state.phone,
        carryObject: this.state.carryObject,
        vehichle: this.state.vehichle,
        driver: this.state.driver,
        cardNo: this.state.cardNo,
        imageUrl: this.state.imageUrl,
        contact: this.state.contact,
        contactDept: this.state.contactDept,
        purpose: this.state.purpose,
        signIn: moment().valueOf(),
        createdAt: moment().valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="green"
              cardTitle="New visitor"
              cardSubtitle="Complete visitor profile"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Full Name"
                        id="full-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.fullName,
                          onChange: this.onFullNameChange
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Organization"
                        id="company"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.company,
                          onChange: this.onCompanyChange
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Address"
                        id="address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.address,
                          onChange: this.onAddressChange
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={7}>
                      <CustomInput
                        labelText="Possession Details"
                        id="carryObject"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.carryObject,
                          onChange: this.onCarryObjectChange
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Phone Number"
                        id="phone"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.phone,
                          onChange: this.onPhoneChange
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Driver Name"
                        id="driver"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.driver,
                          onChange: this.onDriverChange
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Vehicle Details"
                        id="vehicle"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.vehichle,
                          onChange: this.onVehichleChange
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Card Number"
                        id="cardNo"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: this.state.cardNo,
                          onChange: this.onCardNoChange
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#000" }}>
                        CONTACT PERSON
                      </InputLabel>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Contact Name"
                            id="contact"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.contact,
                              onChange: this.onContactChange
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Department"
                            id="contactDept"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.contactDept,
                              onChange: this.onContactDeptChange
                            }}
                          />
                        </ItemGrid>
                        <ItemGrid xs={12} sm={12} md={4}>
                          <CustomInput
                            labelText="Purpose of Visit"
                            id="purpose"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: this.state.purpose,
                              onChange: this.onPurposeChange
                            }}
                          />
                        </ItemGrid>
                      </Grid>
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={<Button color="success" onClick={this.onSubmit}>Add Visitor</Button>}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ProfileCard
              avatar={this.setRef}
              imageUrl={this.state.imageUrl}
              title="Visitor Picture"
              description="Click the 'Capture' button to get camera image. Click again to Recapture image..."
              footer={
                <Button color="success" onClick={this.webcamButton} round>
                  {!!this.state.imageUrl ? 'Retake' : 'Capture'}
                </Button>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (account) => dispatch(startAddAccount(account))
});

export default connect(undefined, mapDispatchToProps)(UserProfile);
