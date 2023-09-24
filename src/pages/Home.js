const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        &#x1F5F9; Phone book welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          &#9742;
        </span>
      </h1>
    </div>
  );
}