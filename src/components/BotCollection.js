import React from "react";
import BotCard from "./BotCard"

function BotCollection({botList, handleAddToArmy, handleDelete}) {
  let displayBots = botList.map(bot => {
    return (
        <BotCard
            key={bot.id}
            bot={bot}
            whenClicked={handleAddToArmy}
            handleDelete={handleDelete}
          />
    )
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
