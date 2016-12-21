import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from './open-color'

const H3 = styled.h3`
  color: ${colors.yellow3};
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0 0;
`

const BandContainer = styled.div`
  color: ${colors.gray1};
`

const Divider = styled.div`
  height: 1px;
  width: 6rem;
  background-color: ${colors.yellow3};
  margin: 0 auto 2rem;
`

const Cite = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: lighter;
  font-style: italic;
  color: ${colors.yellow2};
  margin: 3rem 0;
`

const P = styled.p`
  font-size: 1.1rem;
`

class Band extends Component {
  render() {
    return (
      <BandContainer>
        <H3>Die Band</H3>
        <Divider/>
        <Cite>
          Sie nennen ihren Stil “solid rock” – solide, ehrlich, bodenständig, handgemacht.
          Stylisch und atmosphärisch füllen sie den leeren Raum zwischen den Chili Peppers, Lenny Kravitz, den Foo Fighters und ZZ Top, und machen auch vor Neuinterpretationen nicht Halt.
        </Cite>
        <P>
          Was machen vier Freunde einen Abend lang? Wenn alles Neue erzählt und die erste Vorsichtshalbe getrunken ist?
          Musik natürlich!
          Das jedenfalls dachten sich André und Daniel 2003 und fingen an, sich hin und wieder zum Jammen zu treffen. Kurz darauf stieß dann Markus zur Truppe und brachte die Band auf Powertrio-Niveau (git,bass,drums). Nach diversen Mitmusikern, Castings und Gastspielern wurde schliesslich Mike für die Trommeln verpflichtet und seitdem machen die 4 Freunde Musik, die vor allem ihnen selbst gefallen muss.
        </P>
        <P>
          Im Mai 2015 dann die Hiobsbotschaft: Daniel zieht nach Dänemark! Und weigert sich, fortan für wöchentliche Proben den Katzensprung nach Dachau zu fahren! Der Verlust trifft die Band schwer, und bis schließlich adäquater Ersatz mit Manuel als neuem Gitarristen gefunden wurde, ging fast ein Jahr ins Land.
        </P>
        <P>
          Ein neues Bandmitglied ist auch immer Grund genug, den Bandnamen zu ändern:
          Aus Mamamamucke wurde schließlich Royal Ampire! Und nach langer Livepause steht im Januar 2017 endlich wieder ein Gig an. Der erste in der neuen Besetzung.
        </P>
      </BandContainer>
    )
  }
}

export default Band
