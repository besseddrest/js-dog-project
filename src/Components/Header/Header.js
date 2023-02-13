export const Header = () => {
  return (
    <header>
      <h1>Get a load of these dogs!</h1>
      <div className="header__actions">
        <li><button>Sort by last word in fact</button></li>
        <li><button>Show only favorited</button></li>
        <li><button>Show only one dog</button></li>
      </div>
    </header>
  );
}