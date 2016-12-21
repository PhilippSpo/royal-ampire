import React, { Component } from 'react';
import styled from 'styled-components';
import * as colors from './open-color';

const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${colors.gray0};
  display: flex;
  flex-direction: column;
  margin-top: -100px;
  z-index: 1;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px;
`

const CardHeader = styled.div`
  height: 100px;
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
  color: ${colors.gray6};
`

const location = 'Freizi - Jugendhaus'
const street = 'Lochhamerstr. 3, 82166 Gräfelfing'
const city = 'Einlass: 19:30 - Eintritt: 5€'

class Event extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <PrimaryText>
            {location}
          </PrimaryText>
          <PrimaryText>
            {street}
          </PrimaryText>
          <SecondaryText>
            {city}
          </SecondaryText>
        </CardHeader>
        <Map>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.222698064976!2d11.443920515899448!3d48.12522855999952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd8223315f7a1%3A0x6fc8cb286c32090d!2sLochhamer+Str.+3%2C+82166+Gr%C3%A4felfing!5e0!3m2!1sde!2sde!4v1482357007455" width="100%" height="400" frameBorder="0" style={{ border:0 }}></iframe>
        </Map>
        <CardFooter/>
      </Card>
    )
  }
}

export default Event
