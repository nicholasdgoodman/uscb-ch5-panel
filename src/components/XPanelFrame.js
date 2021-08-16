import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';

const frameStyle = {
    display: 'inline-block',
    backgroundColor: 'black',
    padding: 24
};

const panelStyle = {
    display: 'flex'
}

const panelContentStyle = {
    backgroundColor: 'white',
    height: 800,
    width: 1280,
    minHeight: 800,
    minWidth: 1280
};

const buttonStripStyle = {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 24
};

const buttonStyle = {
    color: 'white'
};

const largeIconStyle = {
    transform: 'scale(1.8)'
};

const PanelFrame = ({children}) => {
    return (
        <div style={frameStyle}>
            <div style={panelStyle}>
                <div style={panelContentStyle}>
                    {children}
                </div>
                <div style={buttonStripStyle}>
                    <div style={buttonStyle}><PowerSettingsNewIcon /></div>
                    <div style={buttonStyle}><HomeIcon /></div>
                    <div style={buttonStyle}><EmojiObjectsIcon /></div>
                    <div style={buttonStyle}><ArrowDropUp style={largeIconStyle} /></div>
                    <div style={buttonStyle}><ArrowDropDownIcon style={largeIconStyle} /></div>
                </div>
            </div>
        </div>
    );
};

export default PanelFrame;