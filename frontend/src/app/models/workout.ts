export interface Workout {
    name?: string,
    description?: string
    sets: Set[]
}

export interface Set {
    noSets?: number,
    breakLngth?: number,
    reps?: Rep[]
}

export interface Rep {
    noReps: number,
    exercise: number
}

// type Exercise struct {
// 	gorm.Model
// 	ID          int    `json:"id" gorm:"primaryKey"`
// 	Name        string `json:"name"`
// 	Description string `json:"description"`
// 	Img         string `json:"img"`
// }

// type Rep struct {
// 	gorm.Model
// 	ID       int      `json:"id" gorm:"primaryKey"`
// 	NoReps   int      `json:"noReps"`
// 	Exercise Exercise `json:"exercise"`
// }

// type Set struct {
// 	gorm.Model
// 	ID         int   `json:"id" gorm:"primaryKey"`
// 	NoSets     int   `json:"noSets"`
// 	BreakLngth int   `json:"breakLngth"`
// 	Reps       []Rep `json:"reps"`
// }

// type Workout struct {
// 	gorm.Model
// 	ID          int    `json:"id" gorm:"primaryKey"`
// 	Name        string `json:"name"`
// 	Description string `json:"description"`
// 	Sets        []Set  `json:"sets"`
// }
