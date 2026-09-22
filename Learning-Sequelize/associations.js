const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING[10],
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "association_users",
  },
);

const Booking = sequelize.define(
  "Booking",
  {
    movie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "association_bookings",
  },
);

User.hasMany(Booking, {
  foreignKey: "userId",
});

Booking.belongsTo(User, {
  foreignKey: "userId",
});

const Movie = sequelize.define(
  "Movie",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "association_movies",
  },
);

const Actor = sequelize.define(
  "Actor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "association_actors",
  },
);

const MovieActor = sequelize.define(
  "MovieActor",
  {},
  {
    tableName: "association_movie_actors",
  },
);

Movie.belongsToMany(Actor, {
  through: MovieActor,
  foreignKey: "movieId",
  otherKey: "actorId",
});

Actor.belongsToMany(Movie, {
  through: MovieActor,
  foreignKey: "actorId",
  otherKey: "movieId",
});

async function main() {
  await sequelize.authenticate();
  console.log("Database connection authenticated.");

  await sequelize.sync({ force: true });

  const arun = await User.create({
    name: "Arun",
    email: "arun@example.com",
  });

  const rahul = await User.create({
    name: "Rahul",
    email: "rahul@example.com",
  });

  await Booking.create({ movie: "Leo", userId: arun.id });
  await Booking.create({ movie: "Avatar", userId: arun.id });
  await Booking.create({ movie: "Leo", userId: rahul.id });

  const userWithBookings = await User.findOne({
    where: { name: "Arun" },
    include: Booking,
  });

  console.log("Arun and his bookings:");
  console.log(userWithBookings.toJSON());

  const bookingWithUser = await Booking.findOne({
    where: { movie: "Avatar" },
    include: User,
  });

  console.log("Avatar booking and its user:");
  console.log(bookingWithUser.toJSON());

  const leo = await Movie.create({ title: "Leo" });
  const avatar = await Movie.create({ title: "Avatar" });

  const vijay = await Actor.create({ name: "Vijay" });
  const sam = await Actor.create({ name: "Sam" });

  await leo.addActor(vijay);
  await leo.addActor(sam);
  await avatar.addActor(sam);

  const movieWithActors = await Movie.findOne({
    where: { title: "Leo" },
    include: Actor,
  });

  console.log("Leo and its actors:");
  console.log(movieWithActors.toJSON());

  const actorWithMovies = await Actor.findOne({
    where: { name: "Sam" },
    include: Movie,
  });

  console.log("Sam and his movies:");
  console.log(actorWithMovies.toJSON());
}

main()
  .catch((error) => console.error(error))
  .finally(() => sequelize.close());
