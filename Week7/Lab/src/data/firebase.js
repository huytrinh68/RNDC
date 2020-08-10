import firebase from 'firebase'


class FirebaseData {
    constructor() {
        this.initData()
        this.checkAuth()
    }

    initData = () => {
        if (!firebase.apps.length) {
            var firebaseConfig = {
                apiKey: "AIzaSyBssZcDfYdJZTkuGlnd6_8hZi3WM0FpYtI",
                authDomain: "chatting-2369d.firebaseapp.com",
                databaseURL: "https://chatting-2369d.firebaseio.com",
                projectId: "chatting-2369d",
                storageBucket: "chatting-2369d.appspot.com",
                messagingSenderId: "381042485605",
                appId: "1:381042485605:web:4357c071e2d81d000ad98c",
                measurementId: "G-Q0WZ8MW804"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = (messages) => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot))
        )
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    off = () => {
        this.db.off()
    }

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)
        return { _id, createdAt, text, user }
    }

    get db() {
        return firebase.database().ref("messages")
    }
}


export default new FirebaseData()