
import React, { useState, useEffect } from "react";
import { createConnection } from "./chat";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // height: '100vh',
};

const inputStyle = {
    marginBottom: '10px',
    marginRight: '10px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '10px',
};

const hrStyle = {
    marginTop: '20px',
};

const roomContainerStyle = {
    border: '5px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center',
};

const roomHeaderStyle = {
    fontSize: '24px',
    marginBottom: '10px',
};

const roomDescriptionStyle = {
    color: '#000000',
    marginBottom: '10px',
};

const roomBiographyStyle = {
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 'auto',
};

function ChatRoom({ roomId, roomBiography, roomDescription }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:123');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);

    return (
        <div style={roomContainerStyle}>
            <div style={roomHeaderStyle}>
                Welcome to the {roomId} room
            </div>
            <div style={roomDescriptionStyle}>
                {roomDescription}
            </div>
            <div style={roomBiographyStyle}>
                {roomBiography}
            </div>
            <label style={labelStyle}>
                Server Url:{''}
                <input
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                    style={inputStyle}
                />
            </label>
        </div>
    );
}

function App() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);

    const selectStyle = {
        marginBottom: '10px',
        marginRight: '10px',
    };

    const buttonStyle = {
        marginBottom: '11px',
        marginRight: '20px',
        backgroundColor:'green',
        borderRadius: '10px'
    };

    const roomDescriptions = {
        general: "General discussions about various topics.",
        travel: "Христофо́р Колу́мб (итал. Cristoforo Colombo, исп. Cristóbal Colón, лат. Christophorus Columbus; между 26 августа и 31 октября 1451, Генуэзская республика — 20 мая 1506, Вальядолид, Королевство Кастилия и Леон) — испанский мореплаватель итальянского происхождения, в 1492 году открывший для европейцев Новый Свет (Америку).\n" +
            "\n" +
            "Колумб первым из достоверно известных путешественников пересёк Атлантический океан в субтропической и тропической полосе Северного полушария и первым из европейцев ходил в Карибском море и в Саргассовом море[3]. Он открыл Южную Америку и Центральную Америку и положил начало их исследованию, включая континентальные части и близлежащие архипелаги — Большие Антильские (Куба, Гаити, Ямайка и Пуэрто-Рико), Малые Антильские (от Доминики до Виргинских островов, а также Тринидад) и Багамские острова.\n" +
            "\n" +
            "Первооткрывателем Америки для европейцев Колумба можно назвать с оговорками, ведь ещё в Средние века на территории Северной Америки бывали европейцы в лице исландских викингов (см. Винланд). Но поскольку за пределами Скандинавии сведений об этих походах не было, именно экспедиции Колумба впервые сделали сведения о землях на западе всеобщим достоянием и положили начало колонизации Америки европейцами.\n" +
            "\n" +
            "Всего Колумб совершил 4 плавания к берегам Америки:\n" +
            "\n" +
            "Первое плавание (3 августа 1492 — 15 марта 1493).\n" +
            "Второе плавание (25 сентября 1493 — 11 июня 1496).\n" +
            "Третье плавание (30 мая 1498 — 25 ноября 1500).\n" +
            "Четвёртое плавание (9 мая 1502 — 7 ноября 1504).\n" +
            "После его смерти имя Колумба как великого путешественника и первооткрывателя было прославлено и иногда используется как нарицательное. Вместе с тем, его жестокость при завоевании новых земель и порабощении индейцев превратила его в неоднозначную фигуру в Америке.",
        music: "Кит Фаррел Козарт (англ. Keith Farrelle Cozart; род. 15 августа 1995, Чикаго, Иллинойс, США), более известный как Chief Keef, — американский рэпер, певец, автор песен и музыкальный продюсер. Начал свою карьеру звукозаписывателя подростком и впервые привлек внимание региона и похвалу за свои микстейпы в начале 2010-х годов. Его первый местный хит «I Don't Like» (с участием Lil Reese) был выпущен в марте 2012 года и вскоре стал его первой записью в Billboard Hot 100, породив ремикс-версию от Kanye West.",
        dance : "Донни Бёрнс MBE родился в Гамильтоне, Саут-Ланаркшир, Шотландия в 1959 году. Является Шотландским профессиональным бальным танцором, исполняющим Латиноамериканскую программу.\n" +
            "\n" +
            "Он и его бывшая партнёрша Гейнор Фэйрвэйзер были 14-кратными Чемпионами Мира по Латиноамериканской Программе: на сегодняшний день этот рекорд не был побит кем-либо ещё. Также они были 11-кратными Чемпионами Международного Чемпионата Америки по Латиноамериканским Танцам, что также является рекордом. К их уходу из соревновательного процесса оба были удостоены Ордена Британской Империи. Донни было невозможно победить ни на одном соревновании на протяжении почти 20 лет непрерывных соревнований - этот рекорд записан в Книгу Рекордов Гиннеса. За этот период он выиграл крупные титулы в разных странах мира.",
    };

    const roomBiographies = {
        general: "General discussion room",
        travel: "Discuss your travel experiences",
        music: "Share and explore music interests",
        dance: "Let's talk about dancer",
    };

    return (
        <div style={containerStyle}>
            <label style={labelStyle}>
                Choose room : {""}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    style={selectStyle}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                    <option value="dance">dance</option>
                </select>
            </label>
            <button
                onClick={() => setShow(!show)}
                style={buttonStyle}
            >
                {show ? "Close chat" : "Open Chat"}
            </button>
            {show && <hr style={hrStyle} />}
            {show && <ChatRoom roomId={roomId} roomBiography={roomBiographies[roomId]} roomDescription={roomDescriptions[roomId]} />}
        </div>
    );
}

export default App;
