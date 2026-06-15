import React, { useState } from 'react'

const MovieTicketBooking = () => {
    const movies = [
        { id: 1, name: "Leo", price: 200 },
        { id: 2, name: "Jailer", price: 180 },
        { id: 3, name: "Vikram", price: 250 },
        { id: 4, name: "Master", price: 220 },
    ];

    const [selectedMovie, setSelectedMovie] = useState(movies[0]);
    const [seats, setSeats] = useState(1);
    const totalAmount = selectedMovie.price * seats;

    return (
        <div>
            <h1>Movie Ticket Booking</h1> <br />

            <label>Select Movie:</label>
            <select name="" id=""
                onChange={(e) => {
                    const movie = movies.find((m) => m.id === Number(e.target.value))
                    setSelectedMovie(movie)
                }}
            >
                {
                    movies.map((movie) => (
                        <option key={movie.id} value={movie.id}>{movie.name}</option>
                    ))
                }
            </select>
            <br />

            <label>Number of Seats: </label>
            <input
                type="number"
                min="1"
                placeholder='How many of seats you want'
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
            />
            <br />
            <div>
                <h3>Total Amount: ₹{totalAmount}</h3>
                <hr />
                <h2>Booking Summary</h2>
                <p> <strong>Movie Name:</strong> {selectedMovie.name} </p>
                <p> <strong>Ticket Price:</strong> ₹{selectedMovie.price} </p>
                <p> <strong>Seats:</strong> {seats} </p>
                <p> <strong>Total Amount:</strong> ₹{totalAmount} </p>
            </div>
        </div>

    )
}

export default MovieTicketBooking