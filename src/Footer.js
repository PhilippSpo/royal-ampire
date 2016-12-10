import React, { Component } from 'react'
import styled from 'styled-components'
import ResponsiveContainer from './Container'
import * as colors from './open-color'

const Container = styled.footer`
  width: 100%;
  background: ${colors.yellow4};
  margin: 64px 0 0;
`

const Content = styled.div`
  padding: 16px 0;
`

export default class Footer extends Component {
  render () {
    return (
      <Container>
        <ResponsiveContainer>
          <Content>
            <div>Copyright 2016 - Royal Empire</div>
            <a>Impressum</a>
          </Content>
        </ResponsiveContainer>
      </Container>
    )
  }
}
