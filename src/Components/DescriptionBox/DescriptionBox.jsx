import React from 'react'
import "./Descriptionbox.css"

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>The iPhone 15 Pro shines with its powerful A17 chip, enhanced camera system, and stunning OLED display. Its titanium frame makes it lighter and more durable, which is a noticeable upgrade. Battery life is decent, lasting almost a full day, but intense users may need a midday charge. However, it is pricey, and some may find the upgrades incremental compared to the iPhone 14 Pro. Still, it’s one of the best-performing phones on the market.</p>
            <p>This power bank is a must-have for frequent travelers. With a 20,000mAh capacity, it can charge most phones several times over, and it also supports fast charging for compatible devices. It’s a bit bulky, but the extra power makes it worthwhile for anyone who doesn’t want to be caught with a dead battery. While it lacks a USB-C port, the dual USB-A outputs still allow you to charge multiple devices simultaneously.</p>
        </div>
    </div>
  )
}

export default Descriptionbox
