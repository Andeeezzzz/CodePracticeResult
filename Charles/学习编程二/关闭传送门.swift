greenPortal.isActive=false
for i in 1 ... 4 {
    for i in 1 ... 3 {
        moveForward()
    }
    turnLeft()
    for i in 1 ... 3 {
        moveForward()
    }
    toggleSwitch()
    turnLeft()
    turnLeft()
}
