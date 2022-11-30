import config from '~/config';

function HeaerLeft({ navigate }) {
    return (
        <>
            <div className="logo-m" onClick={() => navigate(config.routes.home)}>
                <img
                    className="logoImg-m"
                    src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
                    alt="Zing"
                />
            </div>
            <button onClick={() => navigate("https://www.youtube.com/watch?v=dV-znS6RPbQ&list=RDefrVSI3yVSA&index=4&ab_channel=KARIK")} className="btnHeader prevPage active">
                <i className="icon ic-back"></i>
            </button>
            <button onClick={() => navigate(1)} className="btnHeader nextPage">
                <i className="icon ic-forward"></i>
            </button>
        </>
    );
}

export default HeaerLeft;
