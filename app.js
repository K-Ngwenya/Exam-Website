requirejs(["choreographer.min"], function (Choreographer) {
    animations: [
        {
            range: [-1, 1000],
            selector: 'h1',
            type: 'scale',
            style: 'opacity',
            from: 0,
            to: 1

        }
    ]
  });