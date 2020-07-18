import { Images } from '@media'
class Identify {
    static switchTypeAction(type) {
        switch (type) {
            case 1:
                return Images.Scissors
            case 2:
                return Images.Rock
            case 3:
                return Images.Paper
            default:
                return null
        }
    }
    static switchTypeColor(type) {
        switch (type) {
            case 1:
                return "green"
            case 2:
                return "orange"
            case 3:
                return "violet"
            default:
                return null
        }
    }
    static switchName(type) {
        switch (type) {
            case 1:
                return "Scissors";
            case 2:
                return "Rock";
            case 3:
                return "Paper";
            default:
                return null
        }
    }
}
export default Identify