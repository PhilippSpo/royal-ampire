import React, { Component } from 'react';
import styled from 'styled-components';
import * as colors from './open-color';

const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${colors.gray0};
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  z-index: 1;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px;
`

const CardHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
`

const CardFooter = styled.div`
  height: 16px;
`

const Map = styled.div`
  height: 400px;
`

const PrimaryText = styled.div`
  color: ${colors.gray7};
`
const SecondaryText = styled.div`
  color: ${colors.gray5};
`

const street = 'Sudetenlandstraße 30'
const city = 'Dachau'

class Event extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <PrimaryText>
            {street}
          </PrimaryText>
          <SecondaryText>
            {city}
          </SecondaryText>
        </CardHeader>
        <Map>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1852.0445162303663!2d11.457192585653587!3d48.263495502282034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7a59a68f60ef%3A0x70d76ed01d044ca5!2sSudetenlandstra%C3%9Fe+30%2C+85221+Dachau!5e0!3m2!1sde!2sde!4v1481377344598" width="100%" height="400" frameBorder="0" style={{ border:0 }}></iframe>
        </Map>
        <CardFooter/>
      </Card>
    )
  }
}

export default Event
