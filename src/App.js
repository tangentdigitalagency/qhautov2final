import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import CarYear from './components/CarYear';
import CarMake from './components/CarMake';
import CarModel from './components/CarModel';
import PrimaryUse from './components/PrimaryUse';
import Mileage from './components/Mileage';
import CoverageLevel from './components/CoverageLevel';
import Ownership from './components/Ownership';
import HasInsurance from './components/HasInsurance';
import CurrentInsurer from './components/CurrentInsurer';
import Gender from './components/Gender';
import Married from './components/Married';
import Education from './components/Education';
import Credit from './components/Credit';
import TicketsClaims from './components/TicketsClaims';
import SR22 from './components/SR22';
import ActiveLicense from './components/ActiveLicense';
class App extends Component {


  state = {
    route: '/',
    routes: [
      '/',
      '/car-year',
      '/car-make',
      '/car-model',
      '/primary-use',
      '/miles',
      '/coverage-level',
      '/ownership',
      '/has-insurance',
      '/current-insurance',
      '/gender',
      '/relationship',
      '/education',
      '/credit',
      '/tickets-claims',
      '/sr-22',
      '/active-license'
    ],

    postData: {
      lp_campaign_id: '615db3dcbc748',
      lp_campaign_key: 'TFWr3YVyjdHx9qcgnCbK',
      TCPA_Consent: 'Yes',
      TCPA_Language: '',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      landing_page: 'auto.quotehound.com',
      useragent: navigator.userAgent,
      entrance_url: document.referrer,

      zip_code: '',
      vehicle_year: '',
      vehicle_make: '',
      vehicle_model: '',
      first_name: '',
      last_name: '',
      phone_home: '',
      address: '',
      city: '',
      state: '',
      email_address: '',
      TCPA_Langauge: '',
      vehicle_primary_use: '',
      annual_mileage: '',
      desired_coverage_level: '',
      vehicle_ownership: '',
      additional_vehicles: 'no',
      contiunous_coverage: '',
      active_license: '',
      tickets_or_claims_in_last_three_years: '',
      ever_filed_sr22: '',
      homeowner: '',
      married: '',
      gender: '',
      education_level: '',
      credit_score: '',
      current_insurance_provider: '',
      has_insurance: '',
      dui: '',
      lp_caller_id: '',
      gclid: '',
    }
  }

  changeRoute = () => {
    this.setState({
      route: '',
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>

            <Route path='/' exact>

              <LandingPage

                setZipCode={(v) => {

                  this.setState({
                    postData: {
                      ...this.state.postData,
                      zip_code: v,
                    },
                  });
                }}

              />
            </Route>

            <Route path='/car-year' exact>
              <CarYear

              />
            </Route>

            <Route path='/car-make' exact>
              <CarMake />
            </Route>

            <Route path='/car-model' exact>
              <CarModel />
            </Route>

            <Route path='/primary-use' exact>
              <PrimaryUse
                setPrimaryUse={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_primary_use: v,
                      vehicle_year: document.getElementById('carYear').value,
                      vehicle_make: document.getElementById('carMake').value,
                      vehicle_model: document.getElementById('carModel').value,
                    }
                  })
                }}
              />
            </Route>

            <Route path='/annual-mileage' exact>
              <Mileage
                setMileage={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      annual_mileage: v,
                    }

                  })
                }}
              />

            </Route>

            <Route path='/coverage-level' exact>

              <CoverageLevel
                setCoverageLevel={(v) => {
                  this.setState({

                    postData: {
                      ...this.state.postData,
                      desired_coverage_level: v,
                    }

                  })
                }}
              />

            </Route>

            <Route path='/ownership' exact>
              <Ownership
                setOwnership={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      vehicle_ownership: v,
                    }

                  })
                }}
              />
            </Route>

            <Route path='/has-insurance' exact>
              <HasInsurance
                setInsuranceStatus={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      has_insurance: v,
                    }
                  })
                }}
              />

            </Route>

            <Route path='/current-insurance' exact>
              <CurrentInsurer
                currentInsurance={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      current_insurance_provider: v
                    }
                  })
                }}
              />
            </Route>

            <Route path='/gender' exact>
              <Gender
                setGender={(v) => {
                  this.setState({
                    postData: {

                      ...this.state.postData,
                      gender: v,
                    }
                  })
                }}
              />
            </Route>

            <Route path='/relationship' exact>
              <Married
                setMarried={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      married: v,
                    }
                  })
                }}

              />
            </Route>

            <Route path='/education' exact>
              <Education
                setEducation={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      education_level: v,
                    }
                  })
                }}

              />


            </Route>

            <Route path='/credit' exact>
              <Credit
                setCredit={(v) => {
                  this.setState({

                    postData: {
                      ...this.state.postData,
                      credit_score: v,
                    }
                  })
                }}
              />

            </Route>

            <Route path='/tickets-claims' exact>
              <TicketsClaims
                setTicketsClaims={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      tickets_or_claims_in_last_three_years: v,
                    }
                  })
                }}
              />

            </Route>

            <Route path='/sr-22' exact>
              <SR22
                setSR={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      ever_filed_sr22: v,
                    }
                  })
                }}
              />

            </Route>

            <Route path='/active-license' exact>
              <ActiveLicense

                setActive={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      active_license: v,
                    }
                  })
                }}
              />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
