import React from "react";

var mockRender: jest.Mock;
var mockCreateRoot: jest.Mock;

jest.mock("react-dom/client", () => {
  mockRender = jest.fn();
  mockCreateRoot = jest.fn((_element: Element) => ({ render: mockRender }));
  return { createRoot: mockCreateRoot };
});

describe("src/main.tsx", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    jest.clearAllMocks();
  });

  it("calls createRoot with #root and renders StrictMode wrapping App", async () => {
    await import("../../src/main");

    const rootEl = document.getElementById("root");
    expect(mockCreateRoot).toHaveBeenCalledWith(rootEl);

    expect(mockRender).toHaveBeenCalledTimes(1);
    const rendered = mockRender.mock.calls[0][0];
    expect(rendered.type).toBe(React.StrictMode);
    expect(rendered.props.children.type.name).toBe("App");
  });

  it("renders exactly one child inside StrictMode", async () => {
    await import("../../src/main");

    expect(mockRender).toHaveBeenCalledTimes(1);
    const rendered = mockRender.mock.calls[0][0];
    expect(rendered.type).toBe(React.StrictMode);
    expect(React.Children.count(rendered.props.children)).toBe(1);
  });
});
