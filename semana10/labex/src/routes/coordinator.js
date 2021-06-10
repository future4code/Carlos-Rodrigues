
export const goToHome = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToAdminHome = (history) => {
    history.push("/admin/trip/list")
}

export const goToCreateTrip = (history) => {
    history.push("/admin/trips/create")
}

export const goToTripDetails = (history, id) => {
    history.push(`/admin/trips/${id}`)
}

export const goToListTrip = (history) => {
    history.push("/trips/list")
}

export const goToApplicationForm = (history, id) => {
    history.push(`/trips/application/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}