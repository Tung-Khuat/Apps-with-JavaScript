var circles =[];
		
		function onKeyDown(event) {
			//Generate random cordinates
			var maxPoint = new Point(view.size.width, view.size.height);
			var randomPoint = Point.random();
			var point = maxPoint * randomPoint;

			//Make new circles
			var newCircle = new Path.Circle(new Point(300,300), 10);
			newCircle.fillColor = "Orange";
			circles.push(newCircle);
		}

		
		function onFrame(event) {
			fo(var i=0; i < circles.length; i++){
				circles[i].fillColor.hue += 1;
			}
		}