cd D:\workspaces\mongodb_node
mongoimport -d localhost -c workouts < workouts.json
echo "completed...."
exit /b 0