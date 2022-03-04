import React, { useState, useEffect } from 'react';
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  let [botList, setBotList] = useState([])
  let [armyList, setArmyList] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(dataArr => {
      setBotList(dataArr)
    })
  }, [])

  function handleAddToArmy (bot) {
    let botIndex = armyList.filter(botSoldier => botSoldier.id === bot.id)
    if (botIndex <= 0) {
      setArmyList([...armyList, bot])
    }
  }

  function handleRemoveFromArmy (bot) {
    let botIndex = armyList.indexOf(bot) 
    if (botIndex > -1) {
      let newArray = [...armyList]
      newArray.splice(botIndex, 1)
      setArmyList(newArray)
    }
  }

  function handleDelete(bot) {
    fetch('http://localhost:8002/bots/'+bot.id, {
      method: "DELETE", 
      headers: {
      'Content-type': 'application/json; charset=UTF-8' 
      }
    })
    let botIndex = botList.indexOf(bot) 
    if (botIndex > -1) {
      let newArray = [...botList]
      newArray.splice(botIndex, 1)
      setBotList(newArray)
  }
    let armyIndex = armyList.indexOf(bot) 
    if (armyIndex > -1) {
      let newArray = [...armyList]
      newArray.splice(armyIndex, 1)
      setArmyList(newArray)
    }
  }

  return (
    <div>
      <YourBotArmy armyList={armyList} handleRemoveFromArmy={handleRemoveFromArmy} handleDelete={handleDelete}/>
      <BotCollection botList={botList} handleAddToArmy={handleAddToArmy} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
