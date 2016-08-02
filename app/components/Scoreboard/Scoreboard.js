import React, { PropTypes } from 'react'
import moment from 'moment'
import { Game, Date, Loading } from 'components'
import { GameContainer } from 'containers'
import { scoreboardContainer, scoresContainer, loadingContainer } from './styles.css'

export default function ScoreboardUI({date, scores}) {
  return (
    <div className={scoreboardContainer}>
      <Date date={date} />
      <div className={scoresContainer}>
        {scores.game === undefined
          ? <h1>{'no games today'}</h1>
          : scores.game.map(item => <GameContainer key={item.game_pk} game={item} />)
        }
      </div>
    </div>
  )
}

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  scores: PropTypes.object.isRequired
}

export default function Scoreboard(props) {
  return (
    <div>
      {props.isLoading === true
        ? <Loading speed={400} text={'loading'} />
        : <ScoreboardUI
            date={props.date}
            scores={props.scores}
          />
      }
    </div>
  )
}
