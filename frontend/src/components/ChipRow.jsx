export default function ChipRow() {
    return (
      <div className="chip-row" aria-hidden="true">
        <div className="chip">TSK-MCU-001</div>
        <div className="resistor"><i /><i /><i /></div>
        <div className="led-pin" />
        <div className="chip">EEPROM 24C64</div>
        <div className="resistor"><i /><i /><i /></div>
        <div className="chip">RTC DS3231</div>
      </div>
    );
  }