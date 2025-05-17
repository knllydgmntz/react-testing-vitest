import { render, screen } from "@testing-library/react";
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Keen" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
