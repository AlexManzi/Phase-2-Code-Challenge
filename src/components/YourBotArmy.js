import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({armyList, handleRemoveFromArmy, handleDelete}) {
  let displayBots = armyList.map(bot => {
    return (
        <BotCard
            key={bot.id}
            bot={bot}
            whenClicked={handleRemoveFromArmy}
            handleDelete={handleDelete}
          />
    )
  })


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {displayBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
