import React, { Component } from 'react'
import styled from 'styled-components'
import ResponsiveContainer from './Container'
import * as colors from './open-color'
import Modal from 'react-modal'

const Container = styled.footer`
  width: 100%;
  background: ${colors.yellow3};
  margin: 64px 0 0;
`

const Content = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
`

const ModalContent = styled.div`
  background-color: ${colors.gray0};
  padding: 16px;
  border-radius: 8px;
`

export default class Footer extends Component {

  state = { isModalOpen: false }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  render () {
    const { state } = this
    return (
      <Container>
        <ResponsiveContainer>
          <Content>
            <div>Copyright 2016 - Royal Ampire</div>
            <a onClick={this.toggleModal}>Impressum</a>
            <Modal
              isOpen={state.isModalOpen}
              style={{
                content: {
                  background: 'none',
                  border: 0,
                  display: 'flex',
                  alignItems: 'center',
                },
                overlay: {
                  zIndex: 2,
                  backgroundColor: 'rgba(0,0,0,0.8)'
                }
              }}
              onRequestClose={this.toggleModal}
              contentLabel="Impressum"
              shouldCloseOnOverlayClick={true}
            >
              <ResponsiveContainer>
                <ModalContent>
                  <h3>Impressum</h3>
                  <p>
                    Markus Brandt
                    Rockschmiede Dachau
                    85221 Dachau
                  </p>
                  <p>
                    Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Markus Brandt
                  </p>
                  <h4>Haftungshinweis</h4>
                  <p>
                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                  <a onClick={this.toggleModal}>Schließen</a>
                </ModalContent>
              </ResponsiveContainer>
            </Modal>
          </Content>
        </ResponsiveContainer>
      </Container>
    )
  }
}
